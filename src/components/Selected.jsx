import 'react-toastify/dist/ReactToastify.css';
import PropType from 'prop-types'

const Selected = ({ NewPlayer, handleDelete }) => {
    const { image, name, batting_style } = NewPlayer;
    return (
        <div className='container mx-auto px-4 pt-8'>
            <div className="border border-inherit rounded-xl p-4 flex justify-between items-center">
                <div className="flex gap-4">
                    <img className="rounded-lg h-16 w-20 object-cover" src={image} alt="" />
                    <div>
                        <h3 className="font-semibold text-xl">{name}</h3>
                        <p className="opacity-60">{batting_style}</p>
                    </div>
                </div>
                <i onClick={() => {
                    handleDelete(NewPlayer)
                }} className="fa-solid fa-trash cursor-pointer"></i>
            </div>
        </div>
    );
};

Selected.propTypes = {
    handleDelete: PropType.func,
    NewPlayer: PropType.obj
}

export default Selected;