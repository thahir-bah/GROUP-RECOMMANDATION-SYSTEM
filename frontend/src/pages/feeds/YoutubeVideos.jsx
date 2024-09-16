import React, { useEffect, useState } from 'react';
import { fetchYouTubeVideos } from '../../actions/actions';  // Adjust the path as needed
import './YoutubeVideos.css';

const YouTubeVideos = () => {
  const [query, setQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [youtubeVideos, setYoutubeVideos] = useState([]);

  const defaultQuery = 'tourist places in Morocco Draâ-Tafilalet region';


  useEffect(() => {
    const fetchVideos = async () => {
        const videos = await fetchYouTubeVideos(searchTerm || defaultQuery);
        setYoutubeVideos(videos);
      }
    fetchVideos();
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query);
  };

  const iframeStyle = {
    width: '300px',
    height: '200px',
    border: 'none',
    '@media (max-width: 610px)': {
        width: '90%',
        height: '250px'
    }
};

  return (
    <div>
        <section className="hero">
          <div className="container">
            <h2 className="h1 hero-title">Immersion in Morocco</h2>
            <p className="hero-text">
              What's your favorite thing to do when you're traveling? 
              Find the best things to see and do based on your interests or type of travel.
            </p>
            <div className="hero-search">
              <form className="search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    className="form-control" 
                    id="in" 
                    placeholder='Search ...' 
                    name='query' 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} />
                <button type='submit' disabled={!query} className='search btn'>Search</button>
              </form>
            </div>
          </div>
        </section>

      <div style = {{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        alignItems: 'center',
        marginTop: '60px',
        justifyContent: 'center'
      }}>
        {youtubeVideos.length > 0 ? (

          youtubeVideos.map((video) => (
            <div key={video.video_id}>
                <iframe 
                    style={iframeStyle}
                    src={`https://www.youtube.com/embed/${video.video_id}`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>

          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeVideos;
