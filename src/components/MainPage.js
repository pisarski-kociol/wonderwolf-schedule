import React from 'react';
import {
  green,
  pink,
  blue
} from '@mui/material/colors';
import {
  Grid,
  Box,
  Typography,
  Container,
  Link,
  Avatar,
  AppBar,
  Toolbar
} from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@mui/lab'
import {
  EmojiPeople,
  LaptopMac,
  Print,
  AutoStories,
  Visibility,
  Favorite
} from '@mui/icons-material'

const CustomizedTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          Gdzieś w styczniu...
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <EmojiPeople />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Start kanału na Twichu :-)
          </Typography>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Opowiem o książce, jak chciałbym, żeby powstała i dlaczego akurat tak.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: green[700] }}>
                  <LaptopMac/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Będę też trochę programował, żeby umilić i zorganizować przy pomocy prostych narzędzi proces pisania.
                </Typography>
                <Typography>
                  <strong>UWAGA:</strong> Programowania może być tylko trochę, albo całkiem sporo w zależności od zainteresowania.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jakoś od stycznia/lutego do marca/kwietnia...
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <Visibility />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: pink[500] }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Zapoznanie się z treścią
          </Typography>
          <Grid container direction="column" sx={{textAlign: "left"}}>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Będę stopniowo prezentował kolejne fragmenty opowiadania. Poznasz całą historię od początku do końca. To będzie trochę tak jak słuchanie audiobooka z komentarzem. Przy okazji zobaczysz, czy chcesz uczestniczyć w jej współtworzeniu, a jeśli tak, to wyrobisz sobie zdanie co fajnie by było zmienić i jak?
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: green[700] }}>
                  <LaptopMac/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Pokażę jak napisana jest strona internetowa na której teraz jesteś i jak stworzyć podobną. Zaprezentuję również niewielkie narzędzie, z którego będę korzystał do planowania struktury opowiadania. Później wydam to narzędzie na <Link href="https://pl.wikipedia.org/wiki/Otwarte_oprogramowanie">licencji otwartoźródłowej</Link>, żeby każdy mógł z niego skorzystać.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Jakoś w okolicach kwietnia
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: pink[500] }} />
          <TimelineDot sx={{ bgcolor: pink[500] }} >
            <Favorite />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: pink[500] }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            <strong>Wspólne pisanie książki! </strong>
          </Typography>
          <Grid container direction="column">
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Pisanie razem będzie wyglądało tak, jak współcześnie wygląda programowanie w grupie. Pokażę jak korzystać z <Link href="https://github.com/">Githuba</Link>, żeby wspólnie sugerować zmiany w książce. Od czegoś musimy zacząć, zatem historię mam już w głowie, ale na tym etapie wszystko będzie dozwolone - zmiana kierunku rozwoju historii, zmiana charakteru postaci, zmiana zakończenia...
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: green[700] }}>
                  <LaptopMac/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Dostosujemy narzędzia do Twoich i moich potrzeb.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          Pewnie jeszcze w 2022-im.
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: pink[500] }} />
          <TimelineDot color="primary" variant="outlined">
            <Print />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Wydanie książki
          </Typography>
          <Grid container direction="column" sx={{textAlign: "left"}}>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Planuję skontaktować się z najfajniejszymi Polskimi wydawcami ale możliwe, że wydamy tę książkę poprzez usługę Amazon Kindle Direct Publishing (<Link href="https://mfishbein.com/how-to-self-publish-a-book-on-amazon/">KDP</Link>). Conajmniej przez pierwszy rok po wydaniu, dochód zostanie podzielony pomiędzy uczestników (udział obliczony będzie automatyczne na podstawie liczby znaków dodanych do książki lub z niej usuniętych). Po tym czasie (na przykład jeśli dochód będzie niewielki a lista autorów długa), przekażę dochód na wspólnie wybraną organizację charytatywną.
                </Typography>
              </Grid>
            </Grid>
            <Grid container item direction="row">
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: green[700] }}>
                  <LaptopMac/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Opublikuję na Githubie skrypt do organizowania książki. Pokażę jak można z niego skorzystać na własne potrzeby i jak można zgłaszać ewentualne problemy, albo pomysły.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export function MainPage() {
  return (
    <Container component="main">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Harmonogram pisania książki <Link href="#" sx={{color: blue[100]}}>Cudowny Wilk</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography sx={{ paddingTop: 2}}>
        Witaj! :-)
      </Typography>
      <Grid container>
        <Grid item xs={7}>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography sx={{ paddingBottom: 2}}>
              <strong>Czy czytanie, lub pisanie działa na Ciebie kojąco?</strong> A może jeszcze nie wiesz? Tak czy inaczej chciałbym zaprosić Ciebie do udziału w małym eksperymencie. <strong>Napiszmy razem książkę!</strong> Ale taką maksymalnie kojącą. Taką, o której wiesz, że zawsze poprawi Tobie nastrój.
            </Typography>
            <Typography sx={{ paddingBottom: 2}}>
              Są dwa rodzaje tworzenia, które uwielbiam: pisanie i programowanie. Chciałbym podzielić się obiema pasjami. Jeśli się przyłączysz, <strong>doświadczysz zarówno przyjemności pisania opowiadania, jak i przyjemności programowania</strong> tak, jakbyś zajmował się jednym i drugim od lat. Jeśli któraś z tych form tworzenia jest Tobie obca ale zastanawiasz się, czy mogłaby się Tobie spodobać, nie znam lepszego sposobu, niż przyłączenie się do tej zabawy :-)
            </Typography>
            <Typography sx={{ paddingBottom: 2}}>
              Poniżej możesz przeczytać, jak to całe przedsięwzięcie będzie przebiegało. Jeśli podejrzewasz, że to może być coś dla Ciebie, zapraszam na mój kanał na Twitchu, gdzie ta przygoda będzie miała miała miejsce: <Link href="#">Terapeutyczne Pisanie z Krzyśkiem</Link>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box sx={{ marginTop: 2, marginLeft: 2, marginTop: 2 }}>
            <Link href="https://unsplash.com/photos/sMQiL_2v4vs">
              <img src="/veeterzy-sMQiL_2v4vs-unsplash.jpg" width="100%" />
            </Link>
            <Typography size="small">
              autor: <Link href="https://unsplash.com/photos/sMQiL_2v4vs"> veeterzy</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <CustomizedTimeline />
        </Grid>
      </Grid>
    </Container>
  );
}
