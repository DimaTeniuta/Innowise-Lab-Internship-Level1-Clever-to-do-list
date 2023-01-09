import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { WrapperFooter, LinkGitHub, WrapperYear, WrapperLinkGitHub } from './footer.styles';

export const Footer = () => {
  return (
    <Paper component="footer" sx={{ backgroundColor: 'primary.main', borderRadius: 0 }}>
      <Container maxWidth={'xl'}>
        <WrapperFooter>
          <Box sx={{ display: { xs: 'none', md: 'block', lb: 'block' } }}>
            <Link href="https://innowise-group.com/">
              <Box
                component="img"
                sx={{ height: 20, mt: 1 }}
                alt="innowise"
                src="./innowiseLogo.svg"
              />
            </Link>
          </Box>

          <WrapperLinkGitHub>
            <LinkGitHub href="https://github.com/DimaTeniuta" target="_blank" rel="noreferrer">
              <GitHubIcon color="inherit" sx={{ mr: 1 }} />
              <Typography variant="h6" component="span" sx={{ fontSize: 16, mt: 0.1 }}>
                DimaTeniuta
              </Typography>
            </LinkGitHub>
          </WrapperLinkGitHub>

          <WrapperYear>
            <Typography variant="h6" component="span" sx={{ color: '#000000', fontSize: 16 }}>
              &copy; 2022
            </Typography>

            <Box sx={{ display: { xs: 'block', md: 'none', lb: 'none' } }}>
              <Link href="https://innowise-group.com/">
                <Box
                  component="img"
                  sx={{ height: 20, mt: 0.3 }}
                  alt="rss"
                  src="./innowiseLogo.svg"
                />
              </Link>
            </Box>
          </WrapperYear>
        </WrapperFooter>
      </Container>
    </Paper>
  );
};
