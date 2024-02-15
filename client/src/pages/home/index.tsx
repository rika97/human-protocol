import {useEffect} from 'react'
import { Box } from "grommet";
import { Button, Typography } from 'antd';
import {useNavigate} from "react-router-dom";
import {signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook } from '../../firebase/authService';
import {User, UserCredential} from 'firebase/auth';
import {toast} from 'react-toastify';
import {useUserContext} from '../../context/UserContext';
import {getAccount} from '../../api/worker';
import styled from "styled-components";
import LinkedinAuth from '../../oauth/linkedin/LinkedinAuth';
import SignInButton from '../../components/buttons/SignInButton';
import OpenIdLogin from '../../oauth/auth0/OpenIdLogin';

export const HomePage = () => {
  const navigate = useNavigate();

  // TODO: unset user upon logout
  // const { wallet } = useUserContext();

  // useEffect(() => {
  //   if(wallet) {
  //     console.log(`[Home] User wallet address: ${wallet.address}`);
  //     navigate('/feed');
  //   }
  // }, [wallet, navigate]);

  const handleFirebaseSignIn = async (provider: string): Promise<void> => {
    let userCredential: UserCredential;

    try {
      // TODO: ensure the error "auth/popup-closed-by-user" is triggered immediately
      switch (provider) {
        case 'Google':
          userCredential = await signInWithGoogle();
          break;
        case 'Twitter':
          userCredential = await signInWithTwitter();
          break;
        case 'Github':
          userCredential = await signInWithGithub();
          break;
        case 'Facebook':
          userCredential = await signInWithFacebook();
          break;
        default:
          throw new Error('Unsupported provider');
      }
    } catch (error) {
      console.error(error);
    }

    // @ts-ignore
    if(userCredential && userCredential.user) {
      try {
        await handlePostSignIn(userCredential.user);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // const handleEmailSignIn = async (): Promise<void> => {
  //   try {
  //     const userCredential = await signInWithEmail(email, password);
  //     await handlePostSignIn(userCredential.user);
  //     navigate('/feed');
  //   } catch (error) {
  //     console.error(error);
  //     toast.error('Failed to sign in', {
  //       autoClose: 10000
  //     })
  //   }
  // };

  const handlePostSignIn = async (user: User) => {
    if (user.metadata.creationTime === user.metadata.lastSignInTime) { // new user
      navigate('/welcome');
    } else { // existing user
      navigate('/messages');
    }
  };

  return (
    <Box align="center" pad={{ top: '15vh' }} gap={'16px'}>
        <Typography.Title>
          Auth
        </Typography.Title>
        {/* <SignInButton onClick={handleFirebaseSignIn} providerName="Google" displayName="Google" />
        <SignInButton onClick={handleFirebaseSignIn} providerName="Twitter" displayName="Twitter" />
        <SignInButton onClick={handleFirebaseSignIn} providerName="Github" displayName="Github" />
        <SignInButton onClick={handleFirebaseSignIn} providerName="Facebook" displayName="Facebook"/> */}
        <OpenIdLogin providerName="google-oauth2" displayName="Google"/>
        <OpenIdLogin providerName="twitter" displayName="Twitter"/>
        <OpenIdLogin providerName="github" displayName="Github"/>
        <OpenIdLogin providerName="linkedin" displayName="LinkedIn"/>
        <OpenIdLogin providerName="discord" displayName="Discord"/>
        <LinkedinAuth />
        {/* <Input placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleEmailSignIn}>Sign in with Email</Button> */}
    </Box>
  );
}
