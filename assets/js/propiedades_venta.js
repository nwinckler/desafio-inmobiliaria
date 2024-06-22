const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial.',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: '5.000',
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: '1.200',
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: '4.500',
    smoke: false,
    pets: true
    },
    {
    nombre: 'Moderna casa en barrio de lujo',
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    descripcion: 'Impresionante residencia, situada en una exclusiva zona residencial, combina diseño contemporáneo con confort inigualable.',
    ubicacion: '752 Luxury Street, Anytown, CA 2353',
    habitaciones: 7,
    banos: 5,
    costo: '10.000',
    smoke: true,
    pets: true
    }
    ]

// Genero el listado de propiedades para el index:
//Slice no considera el último elemento.
const propiedades_venta_index = propiedades_venta.slice(0,3)

const propiedadesVentaIndex = document.querySelector("#propiedades_venta_index");
const propiedadesVenta = document.querySelector("#propiedades_venta");

//Reviso si estoy en index o en página de ventas:
if(propiedadesVentaIndex !== null){
    let htmlVentaIndex = '';

    for (let propiedad of propiedades_venta_index){
        htmlVentaIndex += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${propiedad.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${propiedad.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones}  Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        `
        if(propiedad.smoke === true){
            htmlVentaIndex += `
            <p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
            </p>
            `
        } else{
            htmlVentaIndex += `
            <p class="text-danger">
                <i class="fas fa-smoking"></i> No se permite fumar
            </p>
            `
        }

        if(propiedad.pets === true){
            htmlVentaIndex += `
            <p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
            </p>
            `
        } else{
            htmlVentaIndex += `
            <p class="text-danger">
                <i class="fas fa-ban"></i> No se permiten mascotas
            </p>
            `
        }

        htmlVentaIndex +=`
                </div>
            </div>
        </div>
        `
    }

    propiedadesVentaIndex.innerHTML = htmlVentaIndex;

}else{
    let htmlVenta = '';

    for (let propiedad of propiedades_venta){
        htmlVenta += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                    src=${propiedad.src}
                    class="card-img-top"
                    alt="Imagen del departamento"
                />
                <div class="card-body">
                    <h5 class="card-title">
                        ${propiedad.nombre}
                    </h5>
                    <p class="card-text">
                        ${propiedad.descripcion}
                    </p>
                    <p>
                    <i class="fas fa-map-marker-alt"></i> 
                    ${propiedad.ubicacion}
                    </p>
                    <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones}  Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
        `
        if(propiedad.smoke === true){
            htmlVenta += `
            <p class="text-success">
                <i class="fas fa-smoking"></i> Permitido fumar
            </p>
            `
        } else{
            htmlVenta += `
            <p class="text-danger">
                <i class="fas fa-smoking"></i> No se permite fumar
            </p>
            `
        }

        if(propiedad.pets === true){
            htmlVenta += `
            <p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas
            </p>
            `
        } else{
            htmlVenta += `
            <p class="text-danger">
                <i class="fas fa-ban"></i> No se permiten mascotas
            </p>
            `
        }

        htmlVenta +=`
                </div>
            </div>
        </div>
        `
    }

    propiedadesVenta.innerHTML = htmlVenta;
}