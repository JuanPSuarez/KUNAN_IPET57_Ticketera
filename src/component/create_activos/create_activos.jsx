import "./create_activos.css";
function Create_activos() {
    return (
        <div className="col-lg-12 mt-3 fondo">
            
                <div className="it p-3">
                    <span className="ti">
                        <strong>Ticketera IT</strong>
                    </span>
                </div>
            <div className="container_activos">
                <div>
                    <form className="text-center">

                        <div className="col-lg-12 p-4  form">
                            <label className="user"> <strong>Nuevo Activo</strong></label>
                        </div>

                        <div className="col-lg-12  form">
                            <label className="user">Codigo/Nomenclatura</label>
                        </div>

                        <div className="col-lg-12  form">
                            <input type="text" name="CN" />
                        </div>

                        <div className="col-lg-12  form">
                            <label className="pass">Nro Serie</label>
                        </div>

                        <div className="col-lg-12  form">
                            <input type="text" name="user" />
                        </div>

                        <div className="col-lg-12  form">
                            <label className="pass">Fecha De Compra</label>
                        </div>

                        <div className="col-lg-12  form">
                            <input type="text" name="user" />
                        </div>

                        <button className="btn btn-success m-4 p-auto">Crear</button>

                        <button className="btn btn-danger m-3">Cancelar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create_activos;