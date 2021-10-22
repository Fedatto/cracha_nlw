const links = {
  github: 'Fedatto',
  youtube: 'watch?v=PfHXKYP-2-Q',
  facebook: 'victor.fedatto',
  instagram: 'victorfedatto',
  twitter: 'rocketseat'
}

function changeLinks() {
  // document.getElementById('userName').textContent = 'O BRABO' a forma simplificada de realizar essa alteração está abaixo, apenas pq nosso elemento é um Id
  // userName.textContent = 'O Pai tá on'

  // for (let i = 0; i <= 10; i++) alert(i)

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`

    // alert(li.children[0].href)
  }
}

changeLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
