const insurancetravel = {
  insurancemn: '//*[@id="block-staticmegamenu"]//li[@class="dp-navbar__item"]//span[text()="Insurance "]',

  travelinsurancemn: '//*[@id="block-staticmegamenu"]//a[@class="mega-menu"]/span[text()="Travel Insurance"]',

  travelinsuranclbl: '//span[contains(@class,"muted-text font-medium")]',

  submitbtn: '//*[contains(@class,"field--item")]//button[@name="product-form-submit"]',

  resultcard1: '(//*[contains(@id,"page-content")]//div[contains(@class,"card-full")])[1]',

  resultcard2: '(//*[contains(@id,"page-content")]//div[contains(@class,"card-full")])[2]',

  resultcard3: '(//*[contains(@id,"page-content")]//div[contains(@class,"card-full")])[3]',

  filtercheckbox: '//*[@data-filter-name="Standard Insurance"]',

  seemorebtn: '//*[@id="collapseSeemoreBtn"]',

  filterrange: '(//*[@class="slider slider-horizontal"])[1]',

  sortchck: '//*[@data-sort-by="insurerName"]//*[text()="Insurer: A to Z "]',

  destinationdrop: '//*[@class="btn btn-default"]',

  selectDestination: (country) => {
    return "(//*[contains(@class,'field field-select')]//*[contains(@class,'dropdown-menu open')]//*[contains(text()," + "'" + country + "'" + ")])[1]"
  },

  banklbl: '(//*[@class="name multi-name"])[1]'
}

export { insurancetravel }
