import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  button: {
    color: "rgba(209, 213, 219, var(--tw-text-opacity))",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        icon={<RestoreIcon />}
        className={classes.button}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        className={classes.button}
      />
      <BottomNavigationAction
        label="Nearby"
        icon={<LocationOnIcon />}
        className={classes.button}
      />
    </BottomNavigation>
  );
}
