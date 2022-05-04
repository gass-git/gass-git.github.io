import React from 'react'


export default function TopTechCard({ s, topTech }) {
  return (
    <div className={s.tech_card}>
      <div className={s.card_title}>
        Top Tech
      </div>
      <div className={s.list}>
        {
          topTech.map((tech) => {
            return (
              <div className={s.tag_box}>
                <div className={s.name}>
                  {tech.tag_name}
                </div>
                <div className={s.score}>
                  {tech.answer_score}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}