import React from 'react';
import {
  green,
  pink
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
          27-go lutego
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
            <Grid container item direction="row" sx={{marginBottom: 1}}>
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
                <Typography sx={{marginBottom: 1}}>
                  Opowiem o narzędziach, które napisałem na potrzeby tej książki.
                </Typography>
                <Typography>
                  <strong>UWAGA:</strong> Programowania na tym kanale może być tylko trochę, albo nieco więcej, w zależności od zainteresowania.
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
          Jakoś od lutego/marca do kwietnia/maja...
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
            <Grid container item direction="row" sx={{marginBottom: 1}}>
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Będę stopniowo prezentował kolejne fragmenty opowiadania. Poznasz całą historię od początku do końca jakby to było słuchowisko w odcinkach. Przy okazji zobaczysz, czy chcesz uczestniczyć w jej współtworzeniu, a jeśli tak, to wyrobisz sobie zdanie co fajnie by było zmienić i jak?
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
          Jakoś w okolicach maja
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
            <Grid container item direction="row" sx={{marginBottom: 1}}>
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Pisanie razem będzie wyglądało trochę tak, jak współcześnie wygląda wspólne programowanie. Pokażę jak korzystać z <Link href="https://github.com/">Githuba</Link>, żeby wspólnie sugerować zmiany w książce. Od czegoś musimy zacząć, zatem pierwsza wersja będzie już gotowa, ale na tym etapie wszystko będzie dozwolone - zmiana kierunku rozwoju historii, zmiana charakteru postaci, zmiana zakończenia...
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
            <Grid container item direction="row" sx={{marginBottom: 1}}>
              <Grid item sx={{marginRight: 1}}>
                <Avatar sx={{ bgcolor: pink[500] }}>
                  <AutoStories/>
                </Avatar>
              </Grid>
              <Grid item xs={10}>
                <Typography>
                  Książka będzie publicznie dostępna w wersji elektronicznej na licencji <Link href="https://en.wikipedia.org/wiki/Open_source">Open Source</Link>. Oznacza to, że każdy będzie mógł ją przeczytać, skopiować, lub zmodyfikować. Postaram się również wydać ją w wersji papierowej, ale szczegóły dopracujemy po drodze.
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
            Pisarski Kocioł, czyli pałac wyobraźni ze wspólną kuchnią
          </Typography>
        </Toolbar>
      </AppBar>
      <Typography sx={{ paddingTop: 2}}>
        Witaj! :-)
      </Typography>
      <Grid container>
        <Grid item xs={6}>
          <Box sx={{ marginTop: 2, marginBottom: 2 }}>
            <Typography sx={{ paddingBottom: 1}}>
              <strong>Czy czytanie, lub pisanie działa na Ciebie kojąco?</strong> Jeśli tak, albo myślisz, że teoretycznie mogłoby, to chciałbym zaprosić Ciebie do udziału w małym eksperymencie. <strong>Napiszmy razem książkę!</strong> Ale taką maksymalnie kojącą. Taką, o której wiesz, że zawsze poprawi Tobie nastrój.
            </Typography>
            <Typography sx={{ paddingBottom: 1}}>
              Metoda wspólnego pisania, którą zaproponuję może okazać się dość nowatorska, więc będziemy potrzebować kilku narzędzi. W ramach tego kanału będę je tworzył i pokarzę jak się programuje.
            </Typography>
            <Typography sx={{ paddingBottom: 1}}>
              Książka zatytuowana jest <em>Cudowny Wilk</em> a jej pierwszy szkic zostanie (częścioło już został) napisany w stylu zainspirowanym <Link href="https://en.wikipedia.org/wiki/Iyashikei">Iyashikei</Link>. Ale to tylko szkic. Jak potoczy się akcja? Kim będą bohaterowie? Jakie będzie zakończenie? To wszystko zależeć będzie również od Ciebie.
            </Typography>
            <Typography sx={{ paddingBottom: 2}}>
              Poniżej możesz przeczytać, jak to przedsięwzięcie będzie przebiegało. Brzmi interesująco? Jeśli tak, to zapraszam na mój kanał na Twitchu: <Link href="https://www.twitch.tv/pisarski_kociol">Pisarski Kocioł</Link>. Zaczynamy we wtorek <strong>27,02,2022</strong>.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ marginTop: 2, marginLeft: 2 }}>
            <Link href="https://www.twitch.tv/pisarski_kociol">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/_0bAa0svX_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Link>
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
