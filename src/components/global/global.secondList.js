import Image from "next/image"

const SecondList = ({
  mal_id,
  image_url,
  title,
  score,
  members,
  start_date,
  end_date,
  type,
  episodes,
}) => {
  return (
    <li key={mal_id}>
      <div>
        <Image
          layout="fixed"
          width={50}
          height={70}
          alt={`Preview for ${title}`}
          src={image_url}
        />
      </div>
      <h3>{title}</h3>
      <div>
        <p>
          {type} {episodes} eps
        </p>
        <p>
          {start_date} {end_date}
        </p>
        <p>{members}</p>
      </div>
      <div>{score}</div>
    </li>
  )
}

export default SecondList
