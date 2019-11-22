import React, {Component} from 'react'
constructor(props); {
    super(props);
    this.state = {
        nama   : '',
        alamat : '',
        hobi   : '',
        umur: null
    }
}

onSubmitHandler = (event) => {
    event.preventDefault();
    let umur = this.state.umur;
    if (!Number(umur)) {
        alert("silahkan isi usia anda terlebih dahulu");
    }
}

onChangeHandler = (event) => {
    let nama   = event.target.name;
    let alamat = event.target.alamat;
    let hobi   = event.target.hobi;
    let val = event.target.value;
    this.setState({
        [nama]  : val,
        [alamat]:val,
        [hobi]: ''
    });
}

class Form extends Component {
    render () {
        return (
            <div className="container">
                <h2 className="alert alert-primary text-center">Tugas Hari ke-4</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group col-5">
                        <label>Nama Lengkap</label>
                        <input type="text" onChange={this.onChangeHandler} name="nama" className="form-control" placeholder="Masukan Nama Anda"/>
                    </div>

                    <div className="form-group col-5">
                        <label>Hobi Anda</label>
                        <input type="text" onChange={this.onChangeHandler} name="hobi" className="form-control" placeholder="Masukan Nama Anda"/>
                    </div>

                    <div className="form-group col-5">
                        <label>Umur Anda</label>
                        <input type="text" onChange={this.onChangeHandler} name="umur" className="form-control" placeholder="Masukan Nama Umur Anda"/>
                    </div>

                    <div className="form-group col-5">
                        <label>Alamat</label>
                        <input type="text" onChange={this.onChangeHandler} name="alamat" className="form-control" placeholder="Masukan Alamat Anda"/>
                    </div>
                    <button type="submit" className="button" onClick= {this.UpdateState}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form