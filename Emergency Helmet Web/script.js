// Data for each user
const users = {
    naman: {
        name: 'Naman Shah',
        bloodGroup: 'AB+',
        contacts: [
            { name: 'Suraj Shah', phone: '+919820236535' },
            { name: 'Urvi Shah', phone: '+919323683419' }
        ],
        address: {
            line1: 'F2 Garden View CHS, MMC road',
            line2: 'Mahim (W), Mumbai- 400016.',
            mapsLink: 'https://maps.app.goo.gl/Ab6iPnaSdHbyFvv86'
        }
    },
    father: {
        name: 'Suraj Shah',
        bloodGroup: 'O+',
        contacts: [
            { name: 'Naman Shah', phone: '+919820236535' },
            { name: 'Urvi Shah', phone: '+919323683419' }
        ],
        address: {
            line1: 'F2 Garden View CHS, MMC road',
            line2: 'Mahim (W), Mumbai- 400016.',
            mapsLink: 'https://maps.app.goo.gl/Ab6iPnaSdHbyFvv86'
        }
    },
    thirdPerson: {
        name: 'Urvi Shah',
        bloodGroup: 'B+',
        contacts: [
            { name: 'Naman Shah', phone: '+919820236535' },
            { name: 'Suraj Shah', phone: '+919820236535' }
        ],
        address: {
            line1: 'F2 Garden View CHS, MMC road',
            line2: 'Mahim (W), Mumbai- 400016.',
            mapsLink: 'https://maps.app.goo.gl/Ab6iPnaSdHbyFvv86'
        }
    }
};


// Show user details
function showDetails(userKey) {
    const user = users[userKey];
    const detailsSection = document.getElementById('detailsSection');

    // Generate contact details HTML
    let contactsHtml = '';
    user.contacts.forEach(contact => {
        contactsHtml += `<p><strong>${contact.name}:</strong> <a href="tel:${contact.phone}">${contact.phone}</a></p>`;
    });

    // Update the details section with the selected user's information
    detailsSection.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Blood Group:</strong> ${user.bloodGroup}</p>
        <h3>Emergency Contacts:</h3>
        ${contactsHtml}
        <h3>Address:</h3>
        <p>${user.address.line1}, ${user.address.line2}</p>
        <p><a href="${user.address.mapsLink}" target="_blank">View on Google Maps</a></p>
        <button onclick="goBack()">Go Back</button>
    `;
    detailsSection.style.display = 'block';
    document.querySelector('.profile-selection').style.display = 'none';
}

// Go back to profile selection
function goBack() {
    document.getElementById('detailsSection').style.display = 'none';
    document.querySelector('.profile-selection').style.display = 'flex';
}
