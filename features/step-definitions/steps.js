const { Given, When, Then } = require('@wdio/cucumber-framework')

Given('I am on the home page', async () => {
	await browser.url(`https://www.newegg.com/`)
})

When('Modal shows up', async () => {
	const $modal = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div > a > img')
	await $modal.isDisplayed()
})

Then('I click on close button', async () => {
	const $button = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button')
	const $modal = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div > a > img')
	await $modal.isDisplayed(async () => {
		await $button.isDisplayed(async () => {
			await $button.click()
		})
	})
})

When('I click on search bar', async () => {
	const input = await $(
		'#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-box.auto-flex'
	)
	await input.click()
})

Then('I type windows in search bar', async () => {
	const input = await $(
		'#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-box.auto-flex > input[type=search]'
	)
	await $(input).waitForDisplayed()
	await $(input).addValue('windows')
})

Then('I click the search button', async () => {
	const button = await $(
		'#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex.is-active > form > div > div.header2021-search-button > button'
	)
	await $(button).waitForDisplayed()
	await button.click()
})

Then('I am on result page', async () => {
	await browser.url(`newegg.com/p/pl?d=windows`)
})

Then('At least one item shows up', async () => {
	const cell = await $('#item_cell_32-350-881_1_0')
	await expect(cell).toBeExisting()
})

When('I click on the today best deals tab', async () => {
	const tab = await $('#trendingBanner_720202')
	await tab.click()
})

Then('I am on todays best deals tab', async () => {
	await browser.url(
		`https://www.newegg.com/todays-deals?cm_sp=Head_Navigation-_-Under_Search_Bar-_-Today%27s+Best+Deals&icid=720202`
	)
})

Then('I click on internet shop logo', async () => {
	const button = await $(
		'#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img'
	)
	await button.click()
})

Then('I am on the main page', async () => {
	await expect(browser.url(`https://www.newegg.com/`))
})
