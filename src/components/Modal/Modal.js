import React, { Component } from "react"
import * as ModalContainer from "react-modal"
import { connect } from 'react-redux'
import { toggleModal, getModalData } from '../../actions'
import { ButtonIcon, Details } from '../../components'
import { history } from '../../config/stores'
import "./styles.scss"

class Modal extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.match && prevProps.match.params !== this.props.match.params && this.props.match.params.country) {
      this.props.getModalData(this.props.data)
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

    // const infoKeys = Object.keys(country)
    // const infoValues = Object.values(country)

    console.log('props: ', this.props.match)

    return (
      <ModalContainer
        isOpen={this.props.match && this.props.match.params.country ? true : false}
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
            <Details
              c={this.props.modalData}
            />
          </div>
          <ButtonIcon
            name='cancel'
            onClick={() => history.push('/')}
          />
          Country Info
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
