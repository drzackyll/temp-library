import React from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

export interface AvatarProps extends MuiAvatarProps {
  dark?: boolean,
  onClick?: () => void,
  icon: JSX.Element
}

const useStyles = (dark: boolean) =>
  makeStyles(() => ({
    avatar: {
      backgroundColor: () => {
        if (dark) return '#453d51';
        return '#E6E6E6';
      },
      cursor: 'pointer',
      width: '40px',
      height: '40px',
      margin: '0px 18px 0px 0px',
    },
    avatarIcon: {
      color: () => {
        if (dark) return '#ffffff';
        return '#000000';
      },
    },
  }));

const Avatar = (props: AvatarProps) => {
  const { dark = false, onClick, icon, ...rest } = props;
  const classes = useStyles(dark)();

  return (
    <MuiAvatar className={classes.avatar} onClick={onClick} {...rest}>
      <span className={classes.avatarIcon}>{icon}</span>
    </MuiAvatar>
  );
};

export default Avatar;