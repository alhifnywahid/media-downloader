
// eslint-disable-next-line react/prop-types
function Modal({id, text1, children}) {
  return (
    
    <dialog id={id} className="modal">
    <div className="modal-box bg-slate-50 dark:bg-base-100">
      <h3 className="font-bold text-lg">{text1}</h3>
      <p className="py-4">
        {children}
      </p>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
  )
}

export default Modal