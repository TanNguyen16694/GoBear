import { When, Then, Given } from "cucumber";
import { assert } from 'chai'
import { travelinsurancedata } from "../data/Data.insurance_travel";
import { insurancetravel } from "../page-object/insurance_travel.po";

/* TestCase008 */
Given("User Open Gobear website", () => {
    browser.url(travelinsurancedata.url);
})

When("User select menu travel", () => {
    browser.pause(1000)
    $(insurancetravel.insurancemn).click()
    browser.pause(1000)
    $(insurancetravel.travelinsurancemn).click()
})
Then("System will display travel screen", () => {
    browser.pause(1000)
    assert.equal($(insurancetravel.travelinsuranclbl).getText(), travelinsurancedata.travelpageverify, '');
})


When("User click button show my result", () => {
    $(insurancetravel.submitbtn).click()
})
Then("System will display list result", () => {
    browser.pause(3000)
    //Verify 3 Cart Existing
    assert.isDefined($(insurancetravel.resultcard1), '')
    assert.isDefined($(insurancetravel.resultcard2), '')
    assert.isDefined($(insurancetravel.resultcard3), '')
})

When("User filter result", () => {
    var country = travelinsurancedata.destination
    browser.pause(1000)

    $(insurancetravel.destinationdrop).click()
    $(insurancetravel.selectDestination(country.country)).keys("\uE007")

    $(insurancetravel.filtercheckbox).click()
    $(insurancetravel.seemorebtn).click()
    $(insurancetravel.filterrange).click()
    $(insurancetravel.sortchck).click()

    browser.pause(1000)
})

Then("System will display list result match with filter", () => {
    assert.equal($(insurancetravel.banklbl).getText(), travelinsurancedata.bankname, '');
})