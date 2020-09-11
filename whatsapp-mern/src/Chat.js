import React from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SearchIcon from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
	return (
		<div className="chat">
			<div className="chat_header">
				<Avatar />
				<div className="chat_headerInfo">
					<h2>Room name</h2>
					<p>Last seen online: </p>
				</div>
				<div className="chat_headerRight">
					<IconButton>
						<SearchIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div className="chat_body">
				<p className="chat_message">
					<span className="chat_name">Sven</span>
					This is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>

				<p className="chat_receiver chat_message">
					<span className="chat_name">Frank</span>
					This is a message
					<span className="chat_timestamp">{new Date().toUTCString()}</span>
				</p>
			</div>
			<div className="chat_footer">
				<IconButton>
					<InsertEmoticonIcon />
				</IconButton>
				<IconButton>
					<AttachFileIcon />
				</IconButton>
				<form className="chat_form">
					<input type="text" className="chat_text" />
					<input type="submit" className="chat_button" placeholder="Send a message" />
				</form>
				<IconButton>
					<MicIcon />
				</IconButton>
			</div>
		</div>
	);
}

export default Chat;
