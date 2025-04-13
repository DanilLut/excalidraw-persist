import { Link } from 'react-router-dom';
import { Board } from '../types/types';
import { useBoardContext } from '../contexts/BoardProvider';
import '../styles/Tab.scss';
import Icon from './Icon';

interface TabProps {
  board: Board;
  activeBoardId: string | undefined;
}

const Tab = ({ board, activeBoardId }: TabProps) => {
  const { handleRenameBoard, handleDeleteBoard } = useBoardContext();

  const isActive = board.id.toString() === activeBoardId;

  return (
    <Link
      key={board.id}
      to={`/board/${board.id}`}
      className={`tab ${isActive ? 'active' : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <label htmlFor={`board-name-input-${board.id}`} className="visually-hidden">
        Board Name
      </label>
      <input
        type="text"
        id={`board-name-input-${board.id}`}
        className="tab-name"
        value={board.name}
        onChange={e => handleRenameBoard(board.id, e.target.value)}
        aria-label={`Edit name for board ${board.name}`}
        readOnly={!isActive}
      />
      {isActive && (
        <button
          className="close-tab-button"
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
            handleDeleteBoard(board.id);
          }}
          aria-label={`Move board ${board.name} to trash`}
        >
          <Icon name="close" />
        </button>
      )}
    </Link>
  );
};

export default Tab;
