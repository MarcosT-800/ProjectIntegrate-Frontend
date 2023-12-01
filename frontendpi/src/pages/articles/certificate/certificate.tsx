import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { Container, Header, ExitButton, ExitIcon } from './stylescerficate';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Table from '@mui/material/Table';



const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const RedditTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function BasicButtons() {
  return (
    <>
      <Header>
        <img width='180px' src='../logoimg2.webp' />
        <ul>
          <li><a>HOME</a></li>
          <li><a>SOBRE</a></li>
          <li><a>AJUDA</a></li>
          <li><a>CONTA</a></li>
          <li><button>EVENTOS</button></li>

        </ul>
      </Header>
      <Container>
  <div className='col-2'>
    <div className='card'>
      <div className='cabecalho'>
        <h1>CRIAR EVENTO</h1>
        <ExitButton>
  <img src="exit-arrow.png" />
</ExitButton>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Participantes</th>
            <th>Selecionar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GUSTAVO CARDOSO BARROS</td>
            <td>
              <Radio name="name" value="name" />
            </td>
          </tr>
          <tr>
            <td>BRUNO SILVEIRA DIONIOSIO</td>
            <td>
              <Radio name="name" value="name" />
            </td>
          </tr>
          <tr>
            <td>ITALLO DA SILVA SANTOS</td>
            <td>
              <Radio name="name" value="name" />
            </td>
          </tr>
          <tr>
            <td>LUCAS WERNEK GARCIA DOS SANTOS</td>
            <td>
              <Radio name="name" value="name" />
            </td>
          </tr>
          <tr>
            <td>VICTOR GABRIEL MONTEIRO</td>
            <td>
              <Radio name="name" value="name" />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className='buttongroup'>
        <Button variant="contained" sx={{ bgcolor: '#1D1D47' }}>Enviar p/Todos</Button>
        <Button variant="contained" sx={{ bgcolor: '#1D1D47' }}>Enviar</Button>
      </div>
    </div>
  </div>
</Container>
    </>
  );
}