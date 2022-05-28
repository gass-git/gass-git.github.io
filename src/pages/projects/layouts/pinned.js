import React, { useState } from 'react'
import devPlusOne from '../../../global/assets/projectImages/devPlus/react_art.jpeg'
import devPlusTwo from '../../../global/assets/projectImages/devPlus/preview.jpg'
import { ReactComponent as Folder } from '../../../global/assets/SVGs/folder.svg'
import { ReactComponent as Github } from '../../../global/assets/SVGs/github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-regular-svg-icons'
import s from './pinned.module.css'
import Modal from '../../../global/components/modal/modal'

export default function Pinned({ src, data }) {
  const [showModal, setShowModal] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  function handleShowModal() {
    setScrollPos(window.scrollY)
    setShowModal(true)
  }

  if (!data) return <div>loading..</div>

  return (
    <section id={s.pinned_project}>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        scrollPos={scrollPos}
      >
        <img src={devPlusOne} style={{ maxWidth: '600px' }} />
        <img src={devPlusTwo} style={{ maxWidth: '600px' }} />
      </Modal>

      <div className={s.top}>

        <div className={s.left}>
          <Folder className={s.folder} />
          <div className={s.project_name}>
            {data.name}
          </div>

        </div>

        <div className={s.middle}>
          <div className={s.movable_text}>
            <div style={{ marginTop: '9px' }}>
              See Live
            </div>

          </div>
        </div>

        <div className={s.right}>
          <FontAwesomeIcon
            icon={faImages}
            style={{ fontSize: '30px', margin: '0px 20px 0px 7px' }}
            onClick={handleShowModal}
          />
          <Github
            onClick={() => window.open(data.repo_url, 'blank')}
          />
        </div>

      </div>

      <div
        className={s.preview}
        onClick={() => window.open(data.project_url, 'blank')}
      >
        <div className={s.image_wrapper}>
          <img src={src} />
        </div>

        <div className={s.about}>
          {data.about}
        </div>

        <div className={s.tech}>
          {
            data['topics'].map((tech) => {
              return <div>{tech}</div>
            })
          }
        </div>

      </div>

    </section>
  )
}
