import PropTypes from 'prop-types';

function Rating({ rating, number }) {
    const ratingSrt = rating.toString();
    const int = ratingSrt.split('.')[0];
    const dec = ratingSrt.split('.')[1];

    return (
        <div className="mr-5 grid grid-cols-2 font-bold ">
            <p className="justify-self-end mx-2">⭐</p>
            {/* you can create a function inside this component directly to generate the className */}
            <div
                className={`text-xl mr-2  flex  self-start

        ${rating === 0 && 'text-slate-200'}
                    ${rating >= 7 && 'text-green-500'}
                    ${7 > rating && rating >= 5 && 'text-yellow-400'}
                    ${rating < 5 && 'text-red-500'}
                    
                    `}
            >
                <p>{int}</p>
                <p className="text-xs self-end">{dec && '.' + dec}</p>
            </div>
            <p className="text-xs self-end col-span-2">({number} votes)</p>
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
};

export default Rating;