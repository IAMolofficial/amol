import React from 'react'

const Computer = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Tools</h3>
    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">VS Code</h3>
            <span className="skills__level">Advance</span>
          </div>
        </div>
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">VirtualBox</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>              
      </div>
      <div className="skills__group">
      <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">Windows</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
        <div className="skills__data">
          <i class="bx bx-badge-check"></i>
          <div>
            <h3 className="skills__name">Ubuntu</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>       
      </div>
    </div>
  </div>
  )
}

export default Computer
