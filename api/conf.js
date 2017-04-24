module.exports.settings = {
    "local": {
        "swagger.port": 10010,
        "swagger.host": 'localhost',
        "elasticsearch.host": 'http://172.17.102.199:9200',
        "elasticsearch.get.all": 'all',
        "elasticsearch.get.all.size": 1000,
        "elasticsearch.index.catalogo": 'catalogo',
        "elasticsearch.type.pack": 'pack',
        "elasticsearch.type.productos": 'productos',
        "elasticsearch.type.tipo.servicio": 'tipo_servicio',
        "elasticsearch.type.tipo.cliente": 'tipo_cliente',
        "elasticsearch.type.tipo.adicional": 'tipo_adicional',
        "elasticsearch.type.producto.adicional": 'producto_adicional',
        "endpoint.soap.ActiveDirectory": 'https://osb.vtr.cl:443/ActiveDirectory'
    },
    "qa": {
        "swagger.port": 8082,
        "swagger.host": '190.160.3.52',
        "elasticsearch.host": 'http://172.17.97.175:9200',
        "elasticsearch.get.all": 'all',
        "elasticsearch.get.all.size": 1000,
        "elasticsearch.index.catalogo": 'catalogo',
        "elasticsearch.type.pack": 'pack',
        "elasticsearch.type.productos": 'productos',
        "elasticsearch.type.tipo.servicio": 'tipo_servicio',
        "elasticsearch.type.tipo.cliente": 'tipo_cliente',
        "elasticsearch.type.tipo.adicional": 'tipo_adicional',
        "elasticsearch.type.producto.adicional": 'producto_adicional',
        "endpoint.soap.ActiveDirectory": 'https://172.17.208.246:443/ActiveDirectory'
    },
    "production": {
        "swagger.port": 8082,
        "swagger.host": '190.160.3.52',
        "elasticsearch.host": 'http://172.17.102.199:9200',
        "elasticsearch.get.all": 'all',
        "elasticsearch.get.all.size": 1000,
        "elasticsearch.index.catalogo": 'catalogo',
        "elasticsearch.type.pack": 'pack',
        "elasticsearch.type.productos": 'productos',
        "elasticsearch.type.tipo.servicio": 'tipo_servicio',
        "elasticsearch.type.tipo.cliente": 'tipo_cliente',
        "elasticsearch.type.tipo.adicional": 'tipo_adicional',
        "elasticsearch.type.producto.adicional": 'producto_adicional',
        "endpoint.soap.ActiveDirectory": 'https://172.17.208.246:443/ActiveDirectory'
    }
};
