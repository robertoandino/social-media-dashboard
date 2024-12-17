import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProfileCard from '../ProfileCard';

// Dummy user data for testing
const userData = {
  user: 'Test User',
  avatar: 'some-avatar.jpg',
  job: 'Developer',
  followers: 100,
  posts: 50,
  likes: 200,
  color: 'red',
};

describe('ProfileCard', () => {
  test('renders the user name', () => {
    render(<ProfileCard user={userData} />);
    const userElement = screen.getByText(userData.user);
    expect(userElement).toBeInTheDocument();
  });

  test('renders the user avatar', () => {
    render(<ProfileCard user={userData} />);
    const avatarElement = screen.getByAltText('Profile');
    expect(avatarElement).toBeInTheDocument();
  });

  test('renders the number of followers', () => {
    render(<ProfileCard user={userData} />);
    const followersElement = screen.getByText(userData.followers);
    expect(followersElement).toBeInTheDocument();
  });

  test('renders profile images', () => {
    render(<ProfileCard user={userData} />);
    const images = screen.getAllByRole('img', { name: /pic-\d+/i });
    expect(images).toHaveLength(4);
  });

  test('opens the modal when a profile image is clicked', () => {
    const mockSelectedImage = 'test-image.jpg';

    const { getByRole } = render(<ProfileCard user={userData} handleImageClick={(img) => (selectedImage = img)} />);
    const firstImage = getByRole('img', { name: /pic-3/i });

    fireEvent.click(firstImage);

    const modalImage = screen.getByAltText('Expanded');
    expect(modalImage).toBeInTheDocument();
    expect(selectedImage).toBe(mockSelectedImage);
  });

  test('closes the modal when clicked outside', () => {
    const { getByRole } = render(<ProfileCard user={userData} selectedImage="test-image.jpg" isAnimating={true} closeModal={() => {}} />);
    const modalBackground = screen.getByRole('region', { name: /modal background/i });

    fireEvent.click(modalBackground);

    const modalImage = screen.queryByAltText('Expanded');
    expect(modalImage).not.toBeInTheDocument();
  });

  test('applies correct gradient background based on user color', () => {
    render(<ProfileCard user={userData} />);
    const gradientElement = screen.getByRole('img', { name: /profile/i }).parentElement;

    const expectedGradientClass = 'from-yellow-500 via-orange-500 to-red-500'; // for red color
    expect(gradientElement).toHaveClass(expectedGradientClass);
  });
});