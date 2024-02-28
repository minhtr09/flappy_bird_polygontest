//SPDX-License-Identifier: UNLICENSED
pragma solidity <=0.8.20;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Bird is ERC721URIStorage, Ownable, AccessControl {
    uint256 private _tokenIds;
    string private _url;
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(address initialOwner)
        ERC721("Floppy Bird", "Bird")
        Ownable(initialOwner)
    {
        _grantRole(DEFAULT_ADMIN_ROLE, initialOwner);
        _tokenIds = 0;
    }

    function mint(address player, string memory tokenURI)
        external
        returns (uint256)
    {
        require(
            owner() == _msgSender() || hasRole(MINTER_ROLE, _msgSender()),
            "Caller is not a minter"
        );
        uint256 newItemId = _tokenIds;
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        _tokenIds += 1;
        return newItemId;
    }

    function _baseURI() internal view override returns (string memory) {
        return _url;
    }

    function setBaseUrl(string memory _newUrl) public onlyOwner {
        _url = _newUrl;
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721URIStorage, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
