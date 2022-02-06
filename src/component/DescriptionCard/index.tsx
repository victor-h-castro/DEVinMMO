/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/require-default-props */
/* eslint-disable import/prefer-default-export */
import { styled } from '@mui/material/styles';
import { Typography, Card, CardContent } from '@mui/material';

const RootStyle = styled(Card)(() => ({
  backgroundColor: '#42a5f560',
  color: '#212b36',
  borderRadius: '16px',
  height: '100%',
}));

type requirementsProps = {
    graphics: string,
    memory:string,
    os:string,
    processor:string,
    storage:string,

}
type CardProps = {
    displayName?: string;
    requirements?:requirementsProps
}

export function DescriptionCard({ displayName = '...', requirements }: CardProps) {
  return (
    <RootStyle>
      <CardContent>
        { !requirements ? (
          <>
            {' '}
            <Typography gutterBottom variant="h4">
              Description
            </Typography>
            <Typography variant="body2" sx={{ pb: { xs: 3, xl: 5 }, maxWidth: 480 }}>
              {displayName}

            </Typography>
          </>
        ) : (
          <>
            <Typography gutterBottom variant="h4">
              Minimum requirements
            </Typography>
            <Typography gutterBottom variant="body2" sx={{ pb: { xs: 1, xl: 2 } }}>
              Operacional System:
              <Typography component="span" variant="subtitle1">
                {requirements.os}
              </Typography>

            </Typography>
            <Typography gutterBottom variant="body2" sx={{ pb: { xs: 1, xl: 2 } }}>
              Processor:
              <Typography component="span" variant="subtitle1">
                {requirements.processor}
              </Typography>

            </Typography>
            <Typography gutterBottom variant="body2" sx={{ pb: { xs: 1, xl: 2 } }}>
              Memory:
              <Typography component="span" variant="subtitle1">
                {requirements.memory}
              </Typography>

            </Typography>
            <Typography gutterBottom variant="body2" sx={{ pb: { xs: 1, xl: 2 } }}>
              Graphics:
              <Typography component="span" variant="subtitle1">
                {requirements.graphics}
              </Typography>

            </Typography>
            <Typography gutterBottom variant="body2" sx={{ pb: { xs: 1, xl: 3 } }}>
              Storage:
              <Typography component="span" variant="subtitle1">
                {requirements.storage}
              </Typography>

            </Typography>
          </>
        )}

      </CardContent>

    </RootStyle>
  );
}
