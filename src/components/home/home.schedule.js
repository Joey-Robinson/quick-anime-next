// https://api.jikan.moe/v3/schedule/monday

const HomeSchedule = () => (
  <div className="home--schedule">
    <ul className="home--schedule__ul">
      <li>Placeholder - Top</li>
      <li>Placeholder - Top</li>
      <li>Placeholder - Top</li>
      <li>Placeholder - Top</li>
      <li>Placeholder - Top</li>
    </ul>
    {/* <ul className="home--schedule__ul">
    {mangaData.top.map(({ mal_id, title, image_url }) => (
      <li>
        <div className="home--schedule__container schedule--container">
          <div className="schedule--container__card">
            <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
              <motion.div
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Image
                  width={103}
                  height={168}
                  src={image_url}
                  alt={`Thumb for ${title}`}
                  layout="fixed"
                />
              </motion.div>
            </Link>
            <h4 className="schedule--container__heading">{title}</h4>
          </div>
        </div>
      </li>
    ))}
  </ul> */}
  </div>
)

export default HomeSchedule
