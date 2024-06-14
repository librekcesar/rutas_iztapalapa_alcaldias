var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cdmx_alcaldias_1 = new ol.format.GeoJSON();
var features_cdmx_alcaldias_1 = format_cdmx_alcaldias_1.readFeatures(json_cdmx_alcaldias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cdmx_alcaldias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cdmx_alcaldias_1.addFeatures(features_cdmx_alcaldias_1);
var lyr_cdmx_alcaldias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cdmx_alcaldias_1, 
                style: style_cdmx_alcaldias_1,
                interactive: false,
                title: '<img src="styles/legend/cdmx_alcaldias_1.png" /> cdmx_alcaldias'
            });
var format_centros_alcaldias_2 = new ol.format.GeoJSON();
var features_centros_alcaldias_2 = format_centros_alcaldias_2.readFeatures(json_centros_alcaldias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_centros_alcaldias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_centros_alcaldias_2.addFeatures(features_centros_alcaldias_2);
var lyr_centros_alcaldias_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_centros_alcaldias_2, 
                style: style_centros_alcaldias_2,
                interactive: false,
                title: '<img src="styles/legend/centros_alcaldias_2.png" /> centros_alcaldias'
            });
var format_rutas_iztapalapa_alcaldias_3 = new ol.format.GeoJSON();
var features_rutas_iztapalapa_alcaldias_3 = format_rutas_iztapalapa_alcaldias_3.readFeatures(json_rutas_iztapalapa_alcaldias_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_iztapalapa_alcaldias_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_iztapalapa_alcaldias_3.addFeatures(features_rutas_iztapalapa_alcaldias_3);
var lyr_rutas_iztapalapa_alcaldias_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_iztapalapa_alcaldias_3, 
                style: style_rutas_iztapalapa_alcaldias_3,
                interactive: true,
    title: 'rutas_iztapalapa_alcaldias<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_0.png" /> Ãlvaro ObregÃ³n<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_1.png" /> Azcapotzalco<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_2.png" /> BENITO JUAREZ<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_3.png" /> CoyoacÃ¡n<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_4.png" /> Cuajimalpa de Morelos<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_5.png" /> CuauhtÃ©moc<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_6.png" /> Gustavo A. Madero<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_7.png" /> Iztacalco<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_8.png" /> Iztapalapa<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_9.png" /> LA MAGDALENA CONTRERAS<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_10.png" /> Miguel Hidalgo<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_11.png" /> MILPA ALTA<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_12.png" /> Tlahuac<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_13.png" /> Tlalpan<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_14.png" /> Venustiano Carranza<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_15.png" /> Xochimilco<br />\
    <img src="styles/legend/rutas_iztapalapa_alcaldias_3_16.png" /> <br />'
        });
var format_iztapalapa_4 = new ol.format.GeoJSON();
var features_iztapalapa_4 = format_iztapalapa_4.readFeatures(json_iztapalapa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_iztapalapa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_iztapalapa_4.addFeatures(features_iztapalapa_4);
var lyr_iztapalapa_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_iztapalapa_4, 
                style: style_iztapalapa_4,
                interactive: false,
                title: '<img src="styles/legend/iztapalapa_4.png" /> iztapalapa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cdmx_alcaldias_1.setVisible(true);lyr_centros_alcaldias_2.setVisible(false);lyr_rutas_iztapalapa_alcaldias_3.setVisible(true);lyr_iztapalapa_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cdmx_alcaldias_1,lyr_centros_alcaldias_2,lyr_rutas_iztapalapa_alcaldias_3,lyr_iztapalapa_4];
lyr_cdmx_alcaldias_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_centros_alcaldias_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'NOM_ENT': 'NOM_ENT', 'COV_': 'COV_', 'COV_ID': 'COV_ID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_rutas_iztapalapa_alcaldias_3.set('fieldAliases', {'NOMGEO': 'NOMGEO', 'start': 'start', 'end': 'end', 'LONG_km': 'LONG_km', });
lyr_iztapalapa_4.set('fieldAliases', {'Direccion': 'Direccion', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'estacion': 'estacion', });
lyr_cdmx_alcaldias_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'NOM_ENT': 'TextEdit', 'COV_': 'Range', 'COV_ID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_centros_alcaldias_2.set('fieldImages', {'CVEGEO': '', 'CVE_ENT': '', 'CVE_MUN': '', 'NOMGEO': '', 'NOM_ENT': '', 'COV_': '', 'COV_ID': '', 'AREA': '', 'PERIMETER': '', });
lyr_rutas_iztapalapa_alcaldias_3.set('fieldImages', {'NOMGEO': 'TextEdit', 'start': 'TextEdit', 'end': 'TextEdit', 'LONG_km': 'TextEdit', });
lyr_iztapalapa_4.set('fieldImages', {'Direccion': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'estacion': 'TextEdit', });
lyr_cdmx_alcaldias_1.set('fieldLabels', {'CVEGEO': 'header label', 'CVE_ENT': 'header label', 'CVE_MUN': 'header label', 'NOMGEO': 'header label', 'NOM_ENT': 'header label', 'COV_': 'header label', 'COV_ID': 'header label', 'AREA': 'header label', 'PERIMETER': 'header label', });
lyr_centros_alcaldias_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'no label', 'NOM_ENT': 'no label', 'COV_': 'no label', 'COV_ID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_rutas_iztapalapa_alcaldias_3.set('fieldLabels', {'NOMGEO': 'header label', 'start': 'header label', 'end': 'header label', 'LONG_km': 'header label', });
lyr_iztapalapa_4.set('fieldLabels', {'Direccion': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'estacion': 'no label', });
lyr_iztapalapa_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});