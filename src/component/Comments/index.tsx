/* eslint-disable import/no-unresolved */
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { StorageProps } from 'type/storage';
import { Stack } from '@mui/material';
import Iconify from 'component/Iconify';

type CommentsProps = {
    comment: StorageProps,
    }

export default function Comments({ comment } : CommentsProps) {
  return (

    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">

        <ListItemText
          primary={comment.user}
          secondary={(
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {comment.comment}
            </>
          )}
        />
        <Stack direction="column" sx={{ position: 'absolute', right: 0 }}>
          <Iconify
            icon="ant-design:caret-up-outlined"
            sx={{ width: 24, height: 24 }}
          />
          <Iconify
            onClick={() => console.log('teste')}
            icon="ant-design:caret-down-outlined"
            sx={{ width: 24, height: 24 }}
          />

        </Stack>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>

  );
}
