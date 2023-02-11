import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../stores/modal';
import modals from '../modals';

export default function Modal() {

    const dispatch = useDispatch();
    const { name, data } = useSelector(state => state.modal);
    const modal = modals.find(modal => modal.name == name);

    const close = () => {
        dispatch(closeModal());
    }
    return (
        <div className="modal">
            <div class="modal-inner">
                <modal.element close={close} data={data} />
            </div>
        </div>
    )
}