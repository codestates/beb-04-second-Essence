import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const messages = [
  {
    id: 1,
    primary: 'kimcoding14',
    secondary: "고생 많으셨어요",
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 2,
    primary: 'lovehacker',
    secondary: `추후 수정하겠습니다.`,
    person: '/static/images/avatar/1.jpg',
  },
  {
    id: 3,
    primary: 'lovehacker',
    secondary: '맛집 추천해드려요?',
    person: '/static/images/avatar/2.jpg',
  },
  {
    id: 4,
    primary: 'Jerry_Park',
    secondary: '인연은 쉽게 끊어지지 않습니다?',
    person: '/static/images/avatar/3.jpg',
  },
  {
    id: 5,
    primary: "Genius_jihyePark",
    secondary: '제 계좌번호는 카뱅 3333,,,,',
    person: '/static/images/avatar/4.jpg',
  },
  {
    id: 6,
    primary: 'leedesign',
    secondary: `12일 짧은시간이구나`,
    person: '/static/images/avatar/5.jpg',
  },
  {
    id: 7,
    primary: 'songfront',
    secondary: `프로젝트3 화이링`,
    person: '/static/images/avatar/1.jpg',
  },
];
const itemData = [
    {
      img: 'https://img.seadn.io/files/0e2bbda52bf0aa96f92f78943332ead0.jpg',
      title: 'Butterfly Sunset Queens',
      author: '@Owned by 5A8EBA',
    },
    {
      img: 'https://lh3.googleusercontent.com/YVyDrv2lF27IX8G7spx3rHXs89G_DYhupoRlcBqRWo5-peJckMhQ-9W831ROMWLQPkqjRptHzF9pUaPB9kMaZEZEMy_s8vQhXgoYrg=w600',
      title: 'Genesis Box #22293',
      author: '@Owned by B5E953',
    },
    {
      img: 'https://lh3.googleusercontent.com/L9DL9pq5LcVeo9YvkpSITmEyyGS4mqy8eT8SXTG64uXSpgHTMJQ72H61i5NQ53gRCAOm8IQ5sHHdTKuqzcQtn6fp0Ad3biP6d1tt4w=w600',
      title: 'Test Subject',
      author: '@Owned by Angry14u',
    },
    {
      img: 'https://img.seadn.io/files/0ffd18a26fa50f91281fb7c3484cefb1.png?fit=max&w=600',
      title: 'Bored Ape Yacht Club',
      author: '@Owned by JimmyLi',
    },
    
  ];


export default function Mypage() {
  return (
    <> 
    <ImageList m={{ width: 700, height: 500 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
      </ImageList>
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: '50px' }}>
        <Typography variant="h3" gutterBottom component="div" sx={{ p: 3, pb: 2 }}>
        활동
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  이번 주
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                  이번 달
                </ListSubheader>
              )}
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
    </>
     );
    }