import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Home</h1>
      </Grid>
      <Grid item xs={6}>
        <dl>
          <dt>
            <strong>Trainee:</strong>
          </dt>
          <dd>
            Łukasz Korzeniowski{' '}
            <a href="mailto:lkorzeniowski2@objectivity.co.uk">
              lkorzeniowski2@objectivity.co.uk
            </a>
          </dd>
          <dt>
            <strong>Lider:</strong>
          </dt>
          <dd>
            Rafał Szymczak{' '}
            <a href="mailto:rszymczak@objectivity.co.uk">
              rszymczak@objectivity.co.uk
            </a>
          </dd>
          <dt>
            <strong>Mentor:</strong>
          </dt>
          <dd>
            Jakub Jagosz{' '}
            <a href="mailto:jjagosz@objectivity.co.uk">
              jjagosz@objectivity.co.uk
            </a>
          </dd>
        </dl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6">Wprowadzenie</Typography>
        <Typography variant="p">
          Upskill na react developera obejmuje naukę javascripta, typescripta
          oraz reacta w stopniu umożliwiającym podjęcie samodzielnej pracy
          projektowej. Praca ta zostanie wykonana z pomocą mentora i będzie
          oparta o onlineowe kursy szkoleniowe oraz stworzenie projektu z
          zaimplementowaniem funkcjonalności reactowych.
        </Typography>
        <h2>Aktualny plan szkolenia (termin ukończenia - 29 październik)</h2>
        <p>Etap 1</p>
        <ul>
          <li>JSX (struktura, stylowanie itp)</li>
          <li>Zagnieżdżanie komponentów</li>
          <li>React props (przekazywanie, odbieranie)</li>
          <li>Children props (zawieranie komponentów)</li>
          <li>
            React state (Ogólnie - aktualizacja stanów, przekazywanie handlerów,
            komponenty nadrzędne itp)
          </li>
          <li>Komponenty kontrolowane / niekontrolowane</li>
        </ul>
        <p>Etap 2</p>
        <ul>
          <li>Zaawansowane - np useMemo, useCallback, useReducer</li>
          <li>React routing (nawigacja w aplikacji)</li>
          <li>Context (wynoszenie stanu)</li>
        </ul>
        <p>Etap 3</p>
        <ul>
          <li>Storybook</li>
          <li>react testing library</li>
        </ul>
        <p>Etap 4</p>
        <ul>
          <li>Tworzenie customowe hooków</li>
        </ul>
        <p>Etap 5</p>
        <ul>
          <li>TypeScipt</li>
          <li>Dependency management (npm, yarn)</li>
          <li>statyczna analiza (np lint)</li>
        </ul>
        <p>Etap 6</p>
        <ul>
          <li>paczki (zależności np Mobx, Redux)</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Home;
