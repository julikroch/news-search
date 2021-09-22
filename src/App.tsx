import { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form/Form';
import NewsList from './components/NewsList/NewsList';

function App() {

  const APIKEY: string = 'e251045db61344ee8a91045d11642c9a';
  const [category, saveCategory] = useState('')
  const [news, saveNews] = useState([])

  useEffect(() => {
    const APIConsult = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${APIKEY}`
      const response = await fetch(url)
      const info = await response.json()
      saveNews(info.articles)
    }

    APIConsult()
  }, [category])

  return (
    <Fragment>
      <Header title='News Searcher' />
      <div className='container white'>
        <Form saveCategory={saveCategory} />
        <NewsList news={news} />
      </div>
    </Fragment>
  )
}

export default App;
