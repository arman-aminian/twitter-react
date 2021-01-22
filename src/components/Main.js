import React from 'react';
import clsx from 'clsx';
import {useTheme} from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from '@material-ui/core';
import {
    Bookmark as BookmarksIcon,
    Explore as ExploreIcon,
    Home as HomeIcon,
    Message as MessageIcon,
    Notifications as NotificationsIcon,
    Person as ProfileIcon,
    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon
} from '@material-ui/icons';
import {MainStyle} from "./MainStyle";
import {Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import Home from "./Home";
import Messages from "./Messages";
import Explore from "./Explore";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import Profile from "./Profile";
import Paper from "@material-ui/core/Paper";

const menu = ["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Profile"];
const icons = [<HomeIcon/>, <ExploreIcon/>, <NotificationsIcon/>, <MessageIcon/>, <BookmarksIcon/>, <ProfileIcon/>];


export default function Main() {
    const classes = MainStyle();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    let {url} = useRouteMatch();

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {[classes.appBarShift]: open,})}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {[classes.hide]: open,})}>
                        <MenuIcon/>
                    </IconButton>
                    <Grid container alignItems={"center"} spacing={3}>
                        <Grid item xs={10}>
                            <Typography variant="h6" noWrap>Twitter</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid container alignItems={"center"} spacing={2}>
                                <Grid item><Avatar src={"https://uifaces.co/our-content/donated/gPZwCbdS.jpg"}/></Grid>
                                <Grid item><Typography>Your Profile</Typography></Grid>
                            </Grid>

                        </Grid>
                    </Grid>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}>
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    {menu.map((text, index) => (
                        <Link to={`/${menu[index].toLowerCase()}`}>
                            <ListItem button key={text}>
                                <ListItemIcon>{icons[index]}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider/>
                {open ? <Button className={classes.tweetButton}>Tweet</Button> : null}
            </Drawer>
            <main className={classes.content}>
                <Grid container alignItems={"flex-start"} justify={"center"} spacing={2}>
                    <Grid item xs={12}><div className={classes.toolbar}/></Grid>
                    <Grid item xs={12} md={5}>
                        <Switch>
                            <Route exact path={"/"} component={Home}/>
                            <Route path={`${url}${menu[0].toLowerCase()}`} component={Home}/>
                            <Route path={`${url}${menu[1].toLowerCase()}`} component={Explore}/>
                            <Route path={`${url}${menu[2].toLowerCase()}`} component={Notifications}/>
                            <Route path={`${url}${menu[3].toLowerCase()}`} component={Messages}/>
                            <Route path={`${url}${menu[4].toLowerCase()}`} component={Bookmarks}/>
                            <Route path={`${url}${menu[5].toLowerCase()}`} component={Profile}/>
                        </Switch>
                    </Grid>
                    <Grid item xs={false} md={3} >
                        <Paper>
                            <h1>   Popular hastags   </h1>
                            <ul>
                                <li>Hashtag1</li>
                                <li>Hashtag2</li>
                                <li>Hashtag3</li>
                                <li>Hashtag4</li>
                            </ul>
                        </Paper>
                    </Grid>
                </Grid>

            </main>
        </div>
    );
}
