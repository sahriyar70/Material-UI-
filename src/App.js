
import { AppBar, Box, Button, IconButton, Toolbar, Typography  } from '@mui/material';
import News from './Components/News/News';
import { useEffect, useState } from 'react';




function App() {
  const [articles,setArticles] = useState([]);
  useEffect( () =>{
      const url = 'https://newsapi.org/v2/everything?q=tesla&from=2025-02-26&sortBy=publishedAt&apiKey=5f123708827b458b87a1a38d0cf460bd'
      fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  },[])

  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        <h1>BY ----- SAHRIYAR</h1>

<h4> News right now ; {articles.length} </h4>

    {
      articles.map(article =>  <News article= {article}></News>)
    }
       
    </div>
  );
}

export default App;
