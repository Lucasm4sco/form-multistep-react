import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import './Thanks.css';

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill className='unsatisfied'/>,
  neutral: <BsFillEmojiNeutralFill className='neutral' />,
  satisfied: <BsFillEmojiSmileFill className='satisfied'/>,
  very_satisfied: <BsFillEmojiHeartEyesFill className='very_satisfied' />
}

const Thanks = ({data}) => {

  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom com 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir sua avaliação clique no botão de <span>Enviar</span>.</p>
      <h3>Resumo da avaliação: </h3>
      <p className='review-data align'>
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <div className='review-data'>
        <span>Comentário: </span>
        <p className='comment'>{data.comment}</p>
      </div>
    </div>
  )
}

export default Thanks