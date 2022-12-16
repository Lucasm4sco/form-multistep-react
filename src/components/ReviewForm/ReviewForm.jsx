import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import './ReviewForm.css';

const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input 
            type="radio" 
            value='unsatisfied' 
            name='review' 
            required 
            checked={data.review === 'unsatisfied'}
            onChange={() => updateFieldHandler('review', 'unsatisfied')}
            />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className='radio-container'>
          <input 
            type="radio" 
            value='neutral' 
            name='review' 
            required 
            checked={data.review === 'neutral'}
            onChange={() => updateFieldHandler('review', 'neutral')}
            />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className='radio-container'>
          <input 
            type="radio" 
            value='satisfied' 
            name='review' 
            required 
            checked={data.review === 'satisfied'}
            onChange={() => updateFieldHandler('review', 'satisfied')}
            />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className='radio-container'>
          <input 
            type="radio" 
            value='vey_satisfied' 
            name='review' 
            required 
            checked={data.review === 'very_satisfied'}
            onChange={() => updateFieldHandler('review', 'very_satisfied')}
            />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
          <label htmlFor="comment">Comentário: </label>
          <textarea 
            name="comment" 
            id="comment" 
            cols="30" rows="10" 
            placeholder='Conte sobre a sua experiência com os nossos produtos...'
            required
            value={data.comment}
            onChange={(e) => updateFieldHandler('comment', e.target.value)}
          ></textarea>
        </div>
    </div>
  )
}

export default ReviewForm