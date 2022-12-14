import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/system/Container';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
  return (
    <Paper component="footer" sx={{ backgroundColor: 'primary.main', borderRadius: 0 }}>
      <Container maxWidth={'xl'}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row', lb: 'row' },
            justifyContent: { xs: 'center', md: 'space-between', lb: 'space-between' },
            alignItems: { xs: 'center', md: 'space-between', lb: 'space-between' },
            rowGap: 2,
            pt: 1,
            pb: 1,
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'block', lb: 'block' } }}>
            <Link href="https://innowise-group.com/">
              <Box
                component="img"
                sx={{
                  height: 20,
                  mt: 1,
                }}
                alt="innowise"
                src="./innowiseLogo.svg"
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 3 },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Link
              href="https://github.com/DimaTeniuta"
              target="_blank"
              rel="noreferrer"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'secondary.main',
                textDecoration: 'none',
              }}
            >
              <GitHubIcon color="secondary" sx={{ mr: 1 }} />
              <Typography variant="h6" component="span" sx={{ fontSize: 16, mt: 0.1 }}>
                DimaTeniuta
              </Typography>
            </Link>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { md: 'flex-end', lg: 'flex-end' },
              columnGap: 4,
              width: { md: 112, lg: 112 },
            }}
          >
            <Typography variant="h6" component="span" sx={{ fontSize: 16 }}>
              &copy; 2022
            </Typography>

            <Box sx={{ display: { xs: 'block', md: 'none', lb: 'none' } }}>
              <Link href="https://innowise-group.com/">
                <Box
                  component="img"
                  sx={{
                    height: 20,
                    mt: 0.3,
                  }}
                  alt="rss"
                  src="./innowiseLogo.svg"
                />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};
