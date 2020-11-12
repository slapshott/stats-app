import React, { Component } from "react"
import * as ModalContainer from "react-modal"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleModal, getModalData } from '../../actions'
import { ButtonIcon } from '../../components'
import "./styles.scss"

class Modal extends Component {
  componentDidMount () {
    this.props.getModalData(this.props.match.params.country)
  }

  renderCoutryDetails () {
    if (this.props.modalData) {
      let infoKeys = Object.keys(this.props.modalData)
      let infoValues = Object.values(this.props.modalData)
      return infoKeys.map((key, i) => {
        return (
          <div
            className='element'
            key={i}>
            {`${key}: ${infoValues[i]}`}
          </div>
        )
      })
    }
  }

  render () {
    let customStyles = {
      overlay: {
        zIndex: 1000,
        overflow: "auto",
        backgroundColor: "rgba(50, 50, 50, 0.7)",
      },
      content: {
        flex: 1,
        top: "50px",
        left: "50%",
        bottom: "auto",
        height: "auto",
        width: "70%",
        marginRight: "-50%",
        transform: "translate(-50%, 0px)",
        border: "none",
        backgroundColor: "#F0F0F0",
        boxShadow: "0px 2px 3px 0px rgba(50, 50, 50, 0.3)",
        padding: "0px",
        marginBottom: "20px",
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        borderRadius: "5px",
      },
    }

    console.log('props: ', this.props)

    return (
      <ModalContainer
        isOpen={this.props.isOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <div
          className={[
            "modal-container",
            this.props.classNames ? this.props.classNames.join(" ") : "",
          ]}
        >
          <div className='inner-container'>
            <div>
            </div>
            <div className='modal-info'>
              <div className='info-title'>
                Country Info
              </div>
              {this.props.modalData && this.renderCoutryDetails()}
            </div>
            <ButtonIcon
              className='button-close'
              name='cancel'
              onClick={() => this.props.history.push('/')}
            />
          </div>
        </div>
      </ModalContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.general.country,
  modal: state.general,
  modalData: state.general.modalData
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  getModalData: (payload) => dispatch(getModalData(payload))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal))
