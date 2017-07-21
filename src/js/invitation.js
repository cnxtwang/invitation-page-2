import '../style/invitation.scss'
import '../../index.html'

let $availableNumber = document.getElementById('availableNumber')
let $users = document.getElementsByName('user')
let $eMail = document.getElementById('eMail')
let $invite = document.getElementById('invite')
let $main = document.getElementsByTagName('main')[0]

const calcAvailableNumber = () => {
  let $selectedUsers = document.querySelectorAll('input[name="user"]:checked')
  $availableNumber.innerText = $users.length - $selectedUsers.length

  let isDisabledInvite = !($selectedUsers.length || $eMail.value);
  $invite.disabled = isDisabledInvite
  $invite.className = isDisabledInvite ? 'disabled' : ''
}

$main.addEventListener('click', evt => {
  if(evt.target.type !== 'checkbox') return
  calcAvailableNumber()
})

$eMail.addEventListener('keyup', () => {
  calcAvailableNumber()
})

$invite.addEventListener('click', () => {
  let message = ''

  let $selectedUsers = document.querySelectorAll('input[name="user"]:checked')
  $selectedUsers.forEach(user => {
    message += user.value + ' '
  })

  alert(message + $eMail.value + ' has been invited')
})

calcAvailableNumber()