import { Movie } from './Movie';

export function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {' '}
            {movies.length ? (
                movies.map((movies) => (
                    <Movie key={movies.imdbID} {...movies} />
                ))
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
