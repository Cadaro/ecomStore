import { AppBar, Switch, Toolbar, Typography } from '@mui/material';

interface Props {
  darkTheme: boolean;
  setDarkModeHandler: () => void;
}

export const Header = ({ darkTheme, setDarkModeHandler }: Props) => {
  return (
    <AppBar position='sticky' sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant='h6'>EcomStore</Typography>
        <Switch
          title='dark-mode'
          onChange={setDarkModeHandler}
          checked={darkTheme}
        />
      </Toolbar>
    </AppBar>
  );
};
