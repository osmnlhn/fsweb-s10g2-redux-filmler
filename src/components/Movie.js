import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { deleteMovie } from '../store/actions/movieActions';
import { addFavorite, removeFavorite } from "../store/actions/favoritesActions";


const Movie = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();


  const movies = useSelector((s)=>s.movie.movies);
  const infavorites=useSelector((store)=>store.favorites.favorites.find(fav=>fav.id==id))

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    history.push('/movies');
  };


  const movie = movies.find(movie => movie.id === Number(id));

  return (
    <div className="bg-white rounded-md shadow flex-1">
      <div className="p-5 pb-3 border-b border-zinc-200">
        <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
      </div>
      <div className='px-5 py-3'>
        <div className='py-1 flex'>
          <div className='view-label'>İsim</div>
          <div className="flex-1">{movie.title}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Yönetmen</div>
          <div className="flex-1">{movie.director}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Tür</div>
          <div className="flex-1">{movie.genre}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Metascore</div>
          <div className="flex-1">{movie.metascore}</div>
        </div>
        <div className='py-1 flex'>
          <div className='view-label'>Açıklama</div>
          <p className='flex-1'>{movie.description}</p>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
        <button type="button" onClick={handleDelete} className="myButton bg-red-600 hover:bg-red-500">Sil</button>

        <button 
        
        onClick={()=> {
          if (infavorites) {
            dispatch(removeFavorite(movie.id))
          }
          else (
            dispatch(addFavorite(movie))
          )
        }
        
        } 
        
        className="myButton bg-blue-600 hover:bg-blue-500 ">{infavorites ? " Favorilerden Çıkar" :" Favorilere Ekle"}</button>
      </div>
    </div>
  );
}

export default Movie;