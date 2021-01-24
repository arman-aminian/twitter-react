import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {
    Image as MediaIcon,
    Gif as GifIcon,
    Poll as PollIcon,
    EmojiEmotionsOutlined as EmojiIcon,
    Schedule as ScheduleIcon

} from "@material-ui/icons";
import {TweetWriterStyle} from "./TweetWriterStyle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export default function TweetWriter() {
    const style = TweetWriterStyle();

    return (
        <>
            <Grid container className={style.root}>
                <Grid item xs={1}><Avatar src={"https://uifaces.co/our-content/donated/gPZwCbdS.jpg"}/></Grid>
                <Grid item xs={11}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                placeholder={"What's happening?"}
                                fullWidth
                                multiline
                                required
                                rows={5}
                                inputProps={{maxLength: 250}}
                            /></Grid>
                        <Grid item xs={12}>
                            <Grid container alignItems={"center"} className={style.actionsLayout}>
                                <Grid item xs={10}>
                                    <Grid container>
                                        <Grid item><IconButton><MediaIcon/></IconButton></Grid>
                                        <Grid item><IconButton><GifIcon/></IconButton></Grid>
                                        <Grid item><IconButton><PollIcon/></IconButton></Grid>
                                        <Grid item><IconButton><EmojiIcon/></IconButton></Grid>
                                        <Grid item><IconButton><ScheduleIcon/></IconButton></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button variant={"contained"}
                                            color={"secondary"}
                                    >Tweet</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
        </>
    );
};