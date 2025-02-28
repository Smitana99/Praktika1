var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_highway_1 = new ol.format.GeoJSON();
var features_highway_1 = format_highway_1.readFeatures(json_highway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_1.addFeatures(features_highway_1);
var lyr_highway_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_1, 
                style: style_highway_1,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_1.png" /> highway'
            });
var format_house_2 = new ol.format.GeoJSON();
var features_house_2 = format_house_2.readFeatures(json_house_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_house_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_house_2.addFeatures(features_house_2);
var lyr_house_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_house_2, 
                style: style_house_2,
                popuplayertitle: 'house',
                interactive: true,
                title: '<img src="styles/legend/house_2.png" /> house'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: true,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_highway_1.setVisible(true);lyr_house_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_highway_1,lyr_house_2,lyr_highway_3];
lyr_highway_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'bridge': 'bridge', 'highway': 'highway', 'layer': 'layer', 'surface': 'surface', 'foot': 'foot', 'handrail': 'handrail', 'incline': 'incline', 'ramp': 'ramp', 'access': 'access', 'bicycle': 'bicycle', 'lanes': 'lanes', 'name': 'name', 'railway': 'railway', 'smoothness': 'smoothness', 'oneway': 'oneway', 'old_ref': 'old_ref', 'ref': 'ref', 'depth': 'depth', 'ford': 'ford', 'footway': 'footway', 'service': 'service', 'description': 'description', });
lyr_house_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'building': 'building', 'address': 'address', });
lyr_highway_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'access': 'access', 'barrier': 'barrier', 'material': 'material', 'power': 'power', 'tower:type': 'tower:type', 'railway': 'railway', 'bicycle': 'bicycle', 'foot': 'foot', 'motorcar': 'motorcar', 'name': 'name', 'name:ru': 'name:ru', 'crossing': 'crossing', 'bus': 'bus', 'public_transport': 'public_transport', 'bench': 'bench', 'ford': 'ford', });
lyr_highway_1.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'bridge': 'TextEdit', 'highway': 'TextEdit', 'layer': 'TextEdit', 'surface': 'TextEdit', 'foot': 'TextEdit', 'handrail': 'TextEdit', 'incline': 'TextEdit', 'ramp': 'TextEdit', 'access': 'TextEdit', 'bicycle': 'TextEdit', 'lanes': 'TextEdit', 'name': 'TextEdit', 'railway': 'TextEdit', 'smoothness': 'TextEdit', 'oneway': 'TextEdit', 'old_ref': 'TextEdit', 'ref': 'TextEdit', 'depth': 'TextEdit', 'ford': 'TextEdit', 'footway': 'TextEdit', 'service': 'TextEdit', 'description': 'TextEdit', });
lyr_house_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'addr:city': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:street': 'TextEdit', 'building': 'TextEdit', 'address': '', });
lyr_highway_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'access': '', 'barrier': '', 'material': '', 'power': '', 'tower:type': '', 'railway': '', 'bicycle': '', 'foot': '', 'motorcar': '', 'name': '', 'name:ru': '', 'crossing': '', 'bus': '', 'public_transport': '', 'bench': '', 'ford': '', });
lyr_highway_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'bridge': 'no label', 'highway': 'no label', 'layer': 'no label', 'surface': 'no label', 'foot': 'no label', 'handrail': 'no label', 'incline': 'no label', 'ramp': 'no label', 'access': 'no label', 'bicycle': 'no label', 'lanes': 'no label', 'name': 'no label', 'railway': 'no label', 'smoothness': 'no label', 'oneway': 'no label', 'old_ref': 'no label', 'ref': 'no label', 'depth': 'no label', 'ford': 'no label', 'footway': 'no label', 'service': 'no label', 'description': 'no label', });
lyr_house_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'addr:city': 'no label', 'addr:housenumber': 'no label', 'addr:postcode': 'no label', 'addr:street': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_highway_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'access': 'no label', 'barrier': 'no label', 'material': 'no label', 'power': 'no label', 'tower:type': 'no label', 'railway': 'no label', 'bicycle': 'no label', 'foot': 'no label', 'motorcar': 'no label', 'name': 'no label', 'name:ru': 'no label', 'crossing': 'no label', 'bus': 'no label', 'public_transport': 'no label', 'bench': 'no label', 'ford': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});