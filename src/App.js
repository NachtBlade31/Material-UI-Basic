import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import  {AppBar,Toolbar,IconButton,Paper,Grid,Button,ButtonGroup,Checkbox,FormControlLabel,TextField,makeStyles,ThemeProvider,createMuiTheme,Typography,Container}from "@material-ui/core";
import {orange,green} from '@material-ui/core/colors'
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import 'fontsource-roboto';

const useStyles=makeStyles({
  root:{
    background:'linear-gradient(45deg,#333,#999)',
    border:0,
    borderRadius:15,
    color:"white",
    padding:"5 30px",
    marginBottom:15
  }
})

const theme=createMuiTheme({

  typography:{
      h2:{
        fontSize:36,
        marginBottom:2
      }
  },

  palette:{
    primary:{
      main:orange[400]
    },
     secondary:{
      main:green[500]
    }

  }
})

function ButtonStyled(){
  const classes=useStyles() 
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked,setChecked]=useState(true)
  return (
    <FormControlLabel
    control={
       <Checkbox
          icon={<SaveIcon/>}
          checkedIcon={<DeleteIcon/>}
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          style ={{color: "#00e676"}}
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
         
    />

    } label="Testing CheckBox"
    />
  )
  }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              MUI Theming
            </Typography>
            <Button>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2" component="div">
          Welcome to the Jungle
        </Typography>
        <Typography variant="subtitle1">
         Choose your character
        </Typography>
        <ButtonStyled/>


        <Grid container spacing={2} justify="center">
          <Grid item xs={3} sm={6}>
          <Paper style={{height:75,width:'100%'}}/>
            </Grid>
            <Grid item xs={3} sm={6}>
          <Paper style={{height:75,width:'100%'}}/>
            </Grid>
            <Grid item xs={3} lg={12}>
          <Paper style={{height:75,width:'100%'}}/>
            </Grid>
  

        </Grid>
        <TextField
          variant="outlined"
          color="secondary"
          type="email"
          label="The Time"
          placeholder="testing@gmail.com"
        />
        <CheckboxExample/>
        <ButtonGroup
          variant="contained"
          size="medium"  
          style={{fontSize:20}} 
          color="primary"
          >

          <Button 
          startIcon={<SaveIcon/>}
          endIcon={<SaveIcon/>}
          onClick={()=>alert('hello')}  
          >
          Save
          </Button>

          <Button 
          startIcon={<DeleteIcon/>}
          endIcon={<DeleteIcon/>}
          onClick={()=>alert('hello')} 
          color="secondary">
          Discard
          </Button>


        </ButtonGroup>

        
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
