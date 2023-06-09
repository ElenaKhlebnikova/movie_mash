import Genres from './genres/genres';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './rating';
import getPicture from '../utils/get-picture';

function MovieItem({ item, media_type }) {
    return (
        <div className=" border-violet-200 border-t-2 my-5  lg:mx-10 lg:min-w-max ">
            <h3 className="font-bold text-2xl my-5">
                {item.title || item.name}
            </h3>
            <div className="grid grid-cols-2 lg:flex lg:justify-start">
                <div className="lg:mb-10 lg:mr-10">
                    <Link
                        to={`/${
                            item.media_type === undefined
                                ? media_type
                                : item.media_type
                        }/${item.id}`}
                    >
                        <img
                            className="h-52"
                            src={getPicture(item.poster_path, 'movie')}
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-between">
                    {item.character ||
                        (item.job && (
                            <div className="lg:self-start">
                                {item.character || item.job}
                            </div>
                        ))}

                    <Genres data={item} />

                    <div>
                        <Rating
                            number={item.vote_count}
                            rating={item.vote_average}
                        />
                    </div>
                    <div className="text-l font-semibold ">
                        <Link
                            to={`/${item.media_type ?? media_type}/${item.id}`}
                        >
                            <button className="underline hover:cursor-pointer hover:text-slate-300">
                                Show more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

MovieItem.propTypes = {
    item: PropTypes.shape({
        vote_count: PropTypes.number.isRequired,
        // you can add all of them here
    }).isRequired,
    media_type: PropTypes.string,
};

export default MovieItem;
