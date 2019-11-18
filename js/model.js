const model = {
    apartments : null,
    verifiedApartments : null,
};

model.saveApartments = function (apartments) {
    model.apartments = apartments;
}

model.deleteApartment = function(apartmentID) {
    if(model.apartments) {
        let index = model.apartments.findIndex(apm => apm.id == apartmentID)
        if(index >= 0) {
            model.apartments.splice(index, 1)
        }
    }
}

model.verifyApartment = function(apartmentID) {
    if(model.apartments) {
        let index = model.apartments.findIndex(apm => apm.id == apartmentID)
        if(index >= 0) {
            model.apartments[index].verified = true;
        }
    }
}

model.saveVerifiedApartments = function (verifiedApartments) {
    model.verifiedApartments = verifiedApartments
}