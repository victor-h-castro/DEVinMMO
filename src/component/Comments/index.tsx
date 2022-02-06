/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { StorageProps } from 'type/storage';
import { Stack, Typography } from '@mui/material';
import Iconify from 'component/Iconify';

type CommentsProps = {
    comment: StorageProps,
    addVote: (id:number) => void,
    subVote: (id:number) => void,
    }

export default function Comments({ comment, addVote, subVote } : CommentsProps) {
  return (

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">

        <ListItemText
          primary={comment.user}
          secondary={comment.comment}
        />
        <Stack direction="column" sx={{ position: 'absolute', right: 0 }}>
          <Iconify
            onClick={() => addVote(comment.position)}
            icon="ant-design:caret-up-outlined"
            sx={{ width: 24, height: 24 }}
          />
          <Typography
            sx={{ display: 'inline', textAlign: 'center', color: comment.votes > 0 ? 'green' : 'red' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {comment.votes !== 0 && comment.votes}
          </Typography>
          <Iconify
            onClick={() => subVote(comment.position)}
            icon="ant-design:caret-down-outlined"
            sx={{ width: 24, height: 24 }}
          />

        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

  );
}
